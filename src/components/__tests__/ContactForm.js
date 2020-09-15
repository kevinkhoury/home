import React from 'react'
import renderer from 'react-test-renderer'
import fetch from 'node-fetch'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import ContactForm from '../ContactForm'

const { Response } = jest.requireActual('node-fetch')

const DEFAULT_PROPS = {
  formText: {
    name: 'name',
    email: 'email',
    message: 'message',
    submit: 'submit',
  },
  isPreview: false,
}

jest.mock('node-fetch')

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'uuid'),
}))

afterEach(() => {
  jest.clearAllMocks()
})

describe('ContactForm', () => {
  it('snapshot renders properly', () => {
    const tree = renderer.create(<ContactForm {...DEFAULT_PROPS} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('encodes form values into a URI string', () => {
    const encode = ContactForm.__get__('encode')
    const result = encode({
      foo: 'foo',
      bar: 'baz',
    })
    expect(result).toBe('foo=foo&bar=baz')
  })
  it('updates form text on user input', () => {
    render(<ContactForm {...DEFAULT_PROPS} />)
    const input = screen.getByPlaceholderText('name')
    fireEvent.change(input, { target: { value: 'foobar' } })
    expect(input.value).toBe('foobar')
  })
  it("doesn't submit on preview", () => {
    const props = { ...DEFAULT_PROPS, isPreview: true }
    render(<ContactForm {...props} />)
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(fetch).not.toHaveBeenCalled()
  })
  it("doesn't submit if the honeypot has text", () => {
    render(<ContactForm {...DEFAULT_PROPS} />)
    const botfield = screen.getByPlaceholderText('uuid')
    fireEvent.change(botfield, { target: { value: 'foobar' } })
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(fetch).not.toHaveBeenCalled()
  })
  it('succeeds on normal submit', async () => {
    fetch.mockReturnValueOnce(Promise.resolve(new Response('foobar')))
    render(<ContactForm {...DEFAULT_PROPS} />)
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    await waitFor(() => expect(screen.getByText(/Thank you/)).toBeTruthy())
  })
  it('fails on network error', async () => {
    fetch.mockReturnValueOnce(Promise.reject('not working'))
    render(<ContactForm {...DEFAULT_PROPS} />)
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    await waitFor(() => expect(screen.getByText(/Whoops/)).toBeTruthy())
  })
})

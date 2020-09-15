import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const responseMessages = {
  initial: null,
  working: null,
  success: 'Thank you! Your message has been sent.',
  error: 'Whoops, something went wrong… Please try again.',
}

const ContactForm = ({ formText, isPreview }) => {
  const botfield = uuidv4()
  const [values, setValues] = useState({
    [botfield]: '',
    name: '',
    email: '',
    message: '',
    checkbox: true,
  })
  const [sendStatus, updateSendStatus] = useState('initial')

  const btnClasses = [
    'button',
    'large',
    sendStatus === 'working' ? 'disabled' : '',
  ]
    .filter((item) => item)
    .join(' ')
  const btnText = sendStatus === 'success' ? 'Success!' : formText.submit

  const handleChange = (e) => {
    const vals = _.cloneDeep(values)
    const { name, type, value } = e.target
    vals[name] = type === 'checkbox' ? !vals[name] : value
    setValues(vals)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isPreview) return null
    if (!!values[botfield]) return null
    updateSendStatus('working')
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...values,
      }),
    })
      .then((result) => {
        const success = result && result.status && result.status === 200
        updateSendStatus(success ? 'success' : 'error')
      })
      .catch(() => {
        updateSendStatus('error')
      })
  }
  return (
    <div className="contact-form-holder">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot={botfield}
        onSubmit={handleSubmit}
        className={`contact-form ${sendStatus}`}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input
            name={botfield}
            placeholder={botfield}
            onChange={handleChange}
            tabIndex="-1"
            aria-label={botfield}
          />
        </div>
        <input
          className="input"
          type={'text'}
          name={'name'}
          placeholder={formText.name}
          onChange={handleChange}
          id={'name'}
          value={values.name}
          required={true}
          aria-label={formText.name}
        />
        <input
          className="input"
          type={'email'}
          name={'email'}
          placeholder={formText.email}
          onChange={handleChange}
          id={'email'}
          value={values.email}
          required={true}
          aria-label={formText.email}
        />
        <textarea
          className="textarea"
          name={'message'}
          placeholder={formText.message}
          onChange={handleChange}
          id={'message'}
          value={values.message}
          required={true}
          rows={4}
          aria-label={formText.message}
        />
        <button className={btnClasses} type="submit">
          {btnText}
        </button>
      </form>
      <div className={`response-msg ${sendStatus}`}>
        {responseMessages[sendStatus]}
      </div>
    </div>
  )
}

ContactForm.propTypes = {
  formText: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,
  isPreview: PropTypes.bool,
}

export default ContactForm

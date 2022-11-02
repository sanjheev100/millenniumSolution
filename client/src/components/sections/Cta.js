import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SectionProps } from '../../utils/SectionProps'
import Input from '../elements/Input'
import axios from 'axios'

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  )
  const [name, setName] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let payload = {
      name,
      email,
      phone,
      description,
    }
    axios
      .post(`${process.env.REACT_APP_BACKEND}/sendEmail`, payload)
      .then((res) => {
        setSuccess('Request Recevied Our Executive will contact you shortly')
        setEmail('')
        setDescription('')
        setName('')
        setPhone('')
        setTimeout(() => {
          setSuccess('')
        }, 6000)
      })
      .catch((error) => {
        console.log(error)
        setError('Something Happend Please Try again later')
        setTimeout(() => {
          setError('')
        }, 6000)
      })
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <div className='cta-slogan'>
            <h3 className='m-0'>Contact our executive.</h3>
          </div>
          <div className='cta-action'>
            {error && (
              <p
                className='error'
                style={{
                  background: '#fff0f0',
                  color: '#ff0000',
                  padding: '10px',
                }}
              >
                {error}
              </p>
            )}

            {success && (
              <p
                className='success'
                style={{
                  background: '#e7f7e2',
                  color: '#0cf327',
                  padding: '10px',
                }}
              >
                {success}
              </p>
            )}
            <form>
              <div class='form-group'>
                {/* <label for='exampleInputEmail1'>Email address</label> */}
                <Input
                  type='text'
                  class='form-control'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter Name'
                  required={true}
                  name='name'
                />
              </div>
              <br />
              <div class='form-group'>
                {/* <label for='exampleInputEmail1'>Email address</label> */}
                <Input
                  type='number'
                  class='form-control'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Enter Phone'
                  required={true}
                  name='phone'
                />
              </div>
              <br />

              <div class='form-group'>
                {/* <label for='exampleInputEmail1'>Email address</label> */}
                <Input
                  type='email'
                  class='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter Email'
                  required={true}
                  name='email'
                />
              </div>
              <br />
              <div class='form-group'>
                {/* <label for='exampleInputEmail1'>Email address</label> */}
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder='Enter Description'
                  rows='4'
                  cols='30'
                  required={true}
                />
              </div>
              <br />
              <button
                disabled={!name || !email || !phone || !description}
                style={{
                  border: 'None',
                  color: 'black',
                  padding: '15px 32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  borderRadius: '10px',
                }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

Cta.propTypes = propTypes
Cta.defaultProps = defaultProps

export default Cta

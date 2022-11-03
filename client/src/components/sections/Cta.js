import React, { useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    let payload = {
      name,
      email,
      phone,
      description,
    }
    setLoading(true)
    axios
      .post(`${process.env.REACT_APP_BACKEND}/sendEmail`, payload)
      .then((res) => {
        setSuccess('Request Recevied Our Executive will contact you shortly')
        setEmail('')
        setDescription('')
        setName('')
        setPhone('')
        setLoading(false)
        setTimeout(() => {
          setSuccess('')
        }, 6000)
        // document.body.scrollTop = document.documentElement.scrollTop = 0
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 2000)
      })
      .catch((error) => {
        console.log(error)
        setError('Something Happend Please Try again later')
        setTimeout(() => {
          setError('')
        }, 6000)
        setLoading(false)
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
              <div className='form-group'>
                {/* <label for='exampleInputEmail1'>Email address</label> */}
                <Input
                  type='text'
                  className='form-control'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter Name'
                  required={true}
                  name='name'
                />
              </div>
              <br />
              <div className='form-group'>
                {/* <label for='exampleInputEmail1'>Email address</label> */}
                <Input
                  type='number'
                  className='form-control'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Enter Phone'
                  required={true}
                  name='phone'
                />
              </div>
              <br />

              <div className='form-group'>
                {/* <label for='exampleInputEmail1'>Email address</label> */}
                <Input
                  type='email'
                  className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter Email'
                  required={true}
                  name='email'
                />
              </div>
              <br />
              <div className='form-group'>
                {/* <label for='exampleInputEmail1'>Email address</label> */}
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder='Enter Description'
                  required={true}
                />
              </div>
              <br />
              <button
                disabled={!name || !email || !phone || !description || loading}
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

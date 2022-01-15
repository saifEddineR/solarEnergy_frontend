import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../css/contact.css';
import { Button, Grid, TextField, Typography } from '@mui/material';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const contactData = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };
  const onSubmit = async () => {
    try {
      const templateParams = {
        name: contactInfo.name,
        email: contactInfo.email,
        subject: contactInfo.subject,
        message: contactInfo.message,
      };
      await emailjs.send(
        'service_mjsrhmi',
        'template_d1yyn1h',
        templateParams,
        'user_7HYGsnyfbl02uBBC3Ioaj'
      );
      setContactInfo({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='contactForm'>
      <div className='container'>
        <Typography
          variant='h6'
          gutterBottom
          style={{ textAlign: 'center', margin: '10 0', color: '#545454' }}
        >
          Client Information
        </Typography>
        <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                type='text'
                name='name'
                id='name'
                value={contactInfo.name}
                ref={register({
                  required: { value: true, message: 'Please enter your name' },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less',
                  },
                })}
                label='Full name'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type='email'
                name='email'
                id='email'
                value={contactInfo.email}
                ref={register({
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                label='Email'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type='text'
                name='subject'
                id='subject'
                value={contactInfo.subject}
                ref={register({
                  required: { value: true, message: 'Please enter a subject' },
                  maxLength: {
                    value: 75,
                    message: 'Subject cannot exceed 75 characters',
                  },
                })}
                label='Subject'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Message'
                name='message'
                id='message'
                value={contactInfo.message}
                ref={register({
                  required: true,
                })}
                multiline
                rows={4}
                variant='outlined'
                required
                fullWidth
              />
            </Grid>
            <Grid style={{ marginLeft: 'calc(50% - 80px)' }} item xs={12} md={12}>
              <Button color='primary' type='submit' variant='contained'>
                calculate
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Contact;

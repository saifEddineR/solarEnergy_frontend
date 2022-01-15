import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from '@mui/material';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { esteemData } from '../../action/esteemAction';
import { useNavigate } from 'react-router-dom';

export default function AddressForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [files, setFiles] = useState();
  const [userInput, setUserInput] = useState({
    fName: '',
    lName: '',
    email: '',
    phoneNumber: '',
    addressCity: '',
    addressLocation: '',
    zipCode: '',
    country: '',
    refSTEG: '',
    annualElecConsum: '',
    roofDimentionL: '',
    roofDimentionW: '',
  });
  const changeInput = (e) => {
    if (e.target.name === 'roofImg') {
      setFiles(e.target.files);
    } else {
      setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }
  };
  const handleUserInput = (e) => {
    e.preventDefault();
    dispatch({ type: 'ESTEEM_SAVE_STORE', payload: userInput });
    dispatch(esteemData(userInput, files));
    setUserInput({
      fName: '',
      lName: '',
      email: '',
      phoneNumber: '',
      addressCity: '',
      addressLocation: '',
      zipCode: '',
      country: '',
      refSTEG: '',
      annualElecConsum: '',
      roofDimentionL: '',
      roofDimentionW: '',
    });
    navigate('/result');
  };

  return (
    <React.Fragment>
      <Typography
        variant='h6'
        gutterBottom
        style={{ textAlign: 'center', margin: '10 0', color: '#545454' }}
      >
        Client Information
      </Typography>
      <form encType='multipart/form-data' onSubmit={handleUserInput}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='fName'
              name='fName'
              label='First name'
              value={userInput.fName}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lName'
              name='lName'
              label='Last name'
              value={userInput.lName}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='phoneNumber'
              name='phoneNumber'
              label='phone number'
              type='number'
              value={userInput.phoneNumber}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='email'
              name='email'
              label='email'
              value={userInput.email}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='addressLocation'
              name='addressLocation'
              label='Address'
              value={userInput.addressLocation}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='addressCity'
              name='addressCity'
              label='City'
              value={userInput.addressCity}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='zipCode'
              name='zipCode'
              type='number'
              min='0'
              label='Zip / Postal code'
              value={userInput.zipCode}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='country'
              name='country'
              label='Country'
              value={userInput.country}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              required
              id='refSTEG'
              name='refSTEG'
              label='STEG ref'
              type='number'
              value={userInput.refSTEG}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              required
              id='annualElecConsum'
              name='annualElecConsum'
              type='number'
              label='annual electricity consumption(Kwh)'
              value={userInput.annualElecConsum}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='roofDimentionL'
              name='roofDimentionL'
              type='number'
              label='roof dimention lengh(m)'
              value={userInput.roofDimentionL}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='roofDimentionW'
              name='roofDimentionW'
              type='number'
              label='roof dimention width(m)'
              value={userInput.roofDimentionW}
              onChange={changeInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Form.File name='roofImg' onChange={changeInput} multiple />
          </Grid>
          <Grid item xs={12} md={12} col={10}>
            {/* <Link to='/result'> */}
            <Button color='primary' type='submit' variant='contained'>
              calculate
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}

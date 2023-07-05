"use client"
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { addUserDtls, addUserAddress, setJustName } from '../../src/store/userSlice'

export default function Home() {
  const user = useSelector((state) => state.user);
  console.log(user)

  const dispatch = useDispatch();
  const setUserDtls = () => {
    dispatch(addUserDtls(
      {
        id: 1,
        name: 'amit',
        email: 'am@abc',
        phno: '6654'
      }
    ))
  }

  const setUserAddress = () => {
    dispatch(addUserAddress(
      {
        city: 'nashville',
        state: 'random-state',
        country: 'country',
        hno: '123',
        street: 'qwertyu'
      }


    ))
  }

  const setJustNameHandler = () => {
    dispatch(setJustName({
      name: 'nkr4m'
    }))
  }

  return (
    <>

      <h3>Dashboard</h3>

      <button type="button" className="btn btn-primary btn-sm" onClick={setUserDtls}>setUserDtls</button>
      <button type="button" className="btn btn-secondary btn-sm" onClick={setUserAddress}>setUserAddress</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={setJustNameHandler}>setUserName</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=>{
        localStorage.clear();
      }}>Clear Data</button>
      
      {user != undefined && user.userDtls?.name}
    </>
  )
}

import React, { useEffect, useState } from 'react';
import { getAccount, updateAccount } from "../../store/actions/account";
import store from "../../store/store";

const Account = () => {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    //todo: check if there user in the storage first

    const user = store.getState().user;

    getAccount(user.uid)
      .then(response => {
        return response.data();
      })
      .then(res => {
        //todo: validate res object
        if (res) {
          setFirstName(res.firstName);
          setLastName(res.lastName);
        }

      })
  }, []);

  const updateAccountHandler = (event) => {
    event.preventDefault();

    if (!firstName.length || !lastName.length)
      return;

    const user = store.getState().user;

    updateAccount(user.uid, {
      firstName,
      lastName
    })
      .then(() => {
        setEditMode(false);
      })
  };

  const editButton = editMode ?
    null :
    <button onClick={() => setEditMode(!editMode)}>Edit</button>;

  const account = editMode ? null : (
    <div>{firstName} {lastName}</div>
  );

  const editForm = editMode ? (
      <form onSubmit={updateAccountHandler}>
        <input
          type="text"
          placeholder='First name'
          value={ firstName }
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder='Last name'
          value={ lastName }
          onChange={e => setLastName(e.target.value)}
        />
        <button>Update</button>
      </form>
    ) : null;

  return (
    <div>
      <h1>Account</h1>
      <div>
        { editButton }
      </div>
      <div>
        { account }
        { editForm }
      </div>
    </div>
  );
};

export default Account;
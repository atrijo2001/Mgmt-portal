const UserItem = ({ user, HandleChange }) => {

  return (
		<div className='form-check'>
			<input
				type='checkbox'
				className='form-check-input '
				onChange={() => HandleChange(user._id)}
			/>
			{user.name}
		</div>
	);
  };
  
  export default UserItem;
  
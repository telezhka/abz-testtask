export const UserList = ({ users }) => {
    if (!Array.isArray(users)) {
      return <p>No users available</p>;
    }
  
    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.photo} alt={user.name} />
            <p>{user.name}</p>
            <p>{user.position}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    );
  };
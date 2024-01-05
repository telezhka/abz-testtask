export const UserList = ({ users }) => {
  if (!Array.isArray(users)) {
    return <p>No users available</p>;
  }

  return (
    <ul className="users-list">
      {users.map(user => (
        <li key={user.id} className="user-item">
          <img src={user.photo} alt={user.name} className="user-pic" />
          <p className="user-name">{user.name}</p>
          <ul className="user-info">
            <li>
              <p>{user.position}</p>
            </li>
            <li>
              <p>{user.email}</p>
            </li>
            <li>
              <p>{user.phone}</p>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

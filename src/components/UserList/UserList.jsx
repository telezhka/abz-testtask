import defaultPic from '../../images/icons/photo-cover.svg';

export const UserList = ({ users }) => {
  if (!Array.isArray(users)) {
    return <p>No users available</p>;
  }
  const regex =
    /https:\/\/frontend-test-assignment-api\.abz\.agency\/images\/users\/([0-9]+([A-Za-z]+[0-9]+)+)\.[A-Za-z]+/i;
  return (
    <ul className="users-list">
      {users.map(user => (
        <li key={user.id} className="user-item">
          <img
            src={regex.test(user.photo) ? user.photo : defaultPic}
            alt={user.name}
            className="user-pic"
            title={user.name}
          />
          <p className="user-name" title={user.name}>
            {user.name}
          </p>
          <ul className="user-info">
            <li>
              <p title={user.position}>{user.position}</p>
            </li>
            <li>
              <p title={user.email}>{user.email}</p>
            </li>
            <li>
              <p title={user.phone}>{user.phone}</p>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

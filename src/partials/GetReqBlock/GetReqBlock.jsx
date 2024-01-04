import { UserList } from 'components/UserItem/UserList';

const fakeUsers = {
  users: [
    {
      id: 19581,
      name: 'test23423',
      email: 'oduyfh@gmail.com',
      phone: '380724567654',
      position: 'Security',
      position_id: 3,
      registration_timestamp: 1704366948,
      photo:
        'https://frontend-test-assignment-api.abz.agency/images/users/659693643faff19581.jpg',
    },
    {
      id: 19580,
      name: 'tt',
      email: 'gdgtest@gmail.com',
      phone: '+380112223355',
      position: 'Lawyer',
      position_id: 1,
      registration_timestamp: 1704365788,
      photo:
        'https://frontend-test-assignment-api.abz.agency/images/users/65968edc4fe1419580.jpg',
    },
    {
      id: 19579,
      name: 'tt',
      email: 'test@gmail.com',
      phone: '+380565656566',
      position: 'Lawyer',
      position_id: 1,
      registration_timestamp: 1704365754,
      photo:
        'https://frontend-test-assignment-api.abz.agency/images/users/65968eba1baca19579.jpg',
    },
    {
      id: 19578,
      name: 'rgg',
      email: 'etrwet@gdgs.fhgf',
      phone: '+380116663322',
      position: 'Security',
      position_id: 3,
      registration_timestamp: 1704363564,
      photo:
        'https://frontend-test-assignment-api.abz.agency/images/users/6596862ce699819578.jpg',
    },
    {
      id: 19577,
      name: 'test',
      email: 'tegdgdsg@fsaf.as',
      phone: '+380112223344',
      position: 'Designer',
      position_id: 4,
      registration_timestamp: 1704359494,
      photo:
        'https://frontend-test-assignment-api.abz.agency/images/users/65967646cabb419577.jpg',
    },
  ],
};

export const GetReqBlock = () => {
  return (
    <section id="users">
      <div>
        <h2>Working with GET request</h2>
        <UserList users={fakeUsers.users} />
        <button>
          <span>Show more</span>
        </button>
      </div>
    </section>
  );
};

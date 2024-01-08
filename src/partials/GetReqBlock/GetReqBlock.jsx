import { UserList } from 'components/UserList/UserList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getUsersError } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { fetchContacts } from '../../redux/operations';

export const GetReqBlock = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts({ page }));
  }, [dispatch, page]);

  const info = useSelector(getContacts);
  const err = useSelector(getUsersError);

  const onShowMore = () => {
    setPage(page + 1);
  };

  return (
    <section id="users">
      <div className="container get-container">
        <div className="get-text-container">
          <h2 className="block-heading get-block-heading">
            Working with GET request
          </h2>
          <UserList users={info.items} />

          {err ? null : info && info.links && info.links.next_url ? (
            <button className="button get-btn" onClick={onShowMore}>
              <span>Show more</span>
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

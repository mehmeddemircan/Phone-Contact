import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupCards from "../components/card/GroupCards";
import MyGroupsCards from "../components/card/MyGroupsCards";
import HomeLayout from "../components/layout/HomeLayout";
import { GetMyGroups } from "../redux/actions/GroupAction";

const MyGroupPage = () => {
  const auth = useSelector((state) => state.auth);
  const getMyGroups = useSelector((state) => state.getMyGroups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetMyGroups(auth.user.id));
  }, [dispatch, auth.user.id]);

  return (
    <Fragment>
      <HomeLayout>
        <div class="row">
          <h3>My Groups</h3>
          <hr />
        </div>
        <div
          class="row d-flex justify-content-evenly my-4"
         
        >
          {/* <MyGroupsCards />
                        <MyGroupsCards />
                        <MyGroupsCards /> */}
          {getMyGroups.mygroups.map((group) => (
            <MyGroupsCards group={group} />
          ))}
        </div>
      </HomeLayout>
    </Fragment>
  );
};

export default MyGroupPage;

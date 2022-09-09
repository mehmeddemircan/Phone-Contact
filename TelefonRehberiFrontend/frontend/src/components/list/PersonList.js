import { Avatar, List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import PersonListItem from "./PersonListItem";

const PersonList = ({
  filterByFirstLetter,
  filterOrderDesc,
  defaultFilter,
}) => {
  const getAllUser = useSelector((state) => state.getAllUser);
  const groupPeopleByLetter = useSelector((state) => state.groupPeopleByLetter);
  const getOrderByDesc = useSelector((state) => state.getOrderByDesc);
  



  return (
    <List class="my-5" style={{ maxHeight: "520px", overflow: "auto" }}>
      {defaultFilter
        ? getAllUser.users.map((person) => (
            <PersonListItem key={person.id} person={person} />
          ))
        : filterOrderDesc
        ? getOrderByDesc.users.map((person, index) => (
            <PersonListItem key={person.id} person={person} />
          ))
        : filterByFirstLetter
        ? groupPeopleByLetter.users.map((item, index) =>
            groupPeopleByLetter.users[index].map((person) => (
              //List Item component
              <PersonListItem key={person.id} person={person} />
            ))
          )
        : getAllUser.users.map((person) => (
            <PersonListItem key={person.id} person={person} />
          ))}
    </List>
  );
};

export default PersonList;

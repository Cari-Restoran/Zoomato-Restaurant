import React, { useEffect } from "react";

import { fetchMenu, fetchDetail } from "../../redux/actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
const Div = styled.div`
  width: 500px;
  display: flex;
  margin: auto;
  margin-top: 50px;
`;
const Card = styled.div`
  width: 300px;
  & img {
    max-width: 200px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

function Desc(props) {
  // let index = 0;
  let { id } = useParams();

  useEffect(() => {
    props.dispatch(fetchMenu(id));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.dispatch(fetchDetail(id));
    // eslint-disable-next-line
  }, []);

  function input() {
    return (
      <Card>
        <img src={props.detail.featured_image} alt="food" />
        <h3>{props.detail.average_cost_for_two}</h3>
        <h3>{props.detail.location.address}</h3>
        <h3>{props.detail.name}</h3>
      </Card>
    );
  }

  return (
    <Div>
      {props.detail.R !== undefined && input()}

      <div>
        {props.desc !== undefined &&
          props.desc.map((item) => {
            return (
              <Item>
                <h4>{item.daily_menu.name}</h4>
              </Item>
            );
          })}
      </div>
    </Div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // detail: state.desc,
    desc: state.desc.daily_menus,
    detail: state.detail,
  };
};
export default connect(mapStateToProps, null)(Desc);

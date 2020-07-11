import React, { useEffect } from "react";

import { fetchMenu, fetchDetail } from "../../redux/actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import img from "../../assets/images/Untitled.png";

import { Card, CardText, CardBody } from "reactstrap";

import styled from "styled-components";
const Div = styled.div`
  width: 600px;
  margin: auto;
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const SectionCard = styled.div`
  width: 300px;
  background-color: #ee4344;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const SectionMenu = styled.div`
  width: 300px;
  text-align: center;
  background-color: white;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const Main = styled.div`
  background-image: url(${img});
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
      <SectionCard>
        <Card>
          <img width="100%" src={props.detail.featured_image} alt="food" />
          <CardBody>
            <CardText>
              <h3>{props.detail.name}</h3>
              <p>Average Price : {props.detail.average_cost_for_two}</p>
              <p>Address: {props.detail.location.address}</p>
            </CardText>
          </CardBody>
        </Card>
      </SectionCard>
    );
  }

  return (
    <Main>
      <Div>
        {props.detail.R !== undefined && input()}

        <SectionMenu>
          <h2>MENU</h2>

          {props.desc !== undefined &&
            props.desc.map((item) => {
              return (
                <div>
                  <p>{item.daily_menu.name}</p>
                </div>
              );
            })}
        </SectionMenu>
      </Div>
    </Main>
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

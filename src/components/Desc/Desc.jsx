import React, { useEffect } from "react";

import { fetchMenu, fetchDetail } from "../../redux/actions";
import { connect } from "react-redux";
import {useParams} from 'react-router-dom'
import img from '../../assets/images/phone.png'

import styled from 'styled-components';

const Content = styled.div`
width:50%;
text-align: center;
padding-right:80px;
`;

const Div = styled.div`
  width:auto;
  margin:auto;
  display:flex;
  margin-top:50px;
  flex-direction:column;
  justify-content:space-evenly;
  @media (max-width:768px){
    width:80%;
    display:flex;
    flex-direction:column;
}
`;



const SectionCard = styled.div`
  width:auto;
  background-color:white;
  text-align:center;
  display:flex;
  justify-content:space-evenly;
  
  @media (max-width:768px){
    width:auto;
    background-color:white;
    display:flex;
    flex-direction:column;
    
}

`;

const Card = styled.div`
    && img {
        width:50%;
    }
    @media (max-width:768px){
        && img {
            width:100%;
        }
    }
`;

const SectionMenu = styled.div`
  width:300px;
  text-align:center;
  background:#EE4344;
  text-align:center;
    margin:auto;
  @media (max-width:768px){
    width:300px;
    background:#EE4344;
    text-align:center;
    margin:auto;

}
`;

const Main = styled.div`
width:auto;

`;

function Desc(props) {
    let {id} = useParams();


  useEffect(() => {
    props.dispatch(fetchMenu(id));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.dispatch(fetchDetail(id));
    // eslint-disable-next-line
  }, []);

   function input(){
        return (
                <SectionCard>
                    <Card>

                         <img src={props.detail.featured_image} alt="food"/>

                    </Card>
 
                     <Content>

                        <p><strong>{props.detail.name}</strong></p>
                        <p>Average Price : {props.detail.average_cost_for_two}</p>
                        <p>Address: {props.detail.location.address}</p>
                        <a href={`tel:${props.detail.phone_numbers}`}><img src={img} alt='logo' width="36px"/></a>
                       
                     </Content>


                  
                </SectionCard>
              
        )
    };
  
    return (
        <Main>

        <Div>
            {props.detail.R !== undefined &&
            input()
            }

            <SectionMenu>

            <h2>MENU</h2>

            {props.desc !== undefined &&
           //eslint-disable-next-line
             props.desc.map((item )=> {
                if (item.daily_menu.name !== null) {
                    
                    return (
                        <div >                  
                        <p>{item.daily_menu.name}</p>
                       </div>
                    )
                }
             
             })}
            </SectionMenu>
       
        </Div>
        </Main>
    )
}      


const mapStateToProps = (state) => {
    console.log(state)
    return {
        desc:state.desc.daily_menus,
        detail:state.detail,
    }    
    

};
export default connect(mapStateToProps, null)(Desc);

import React, { useEffect } from "react";

import { fetchMenu } from "../../redux/actions";
import { fetchDetail } from "../../redux/actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Desc(props) {
  // let index = 0;
  let { id } = useParams();
  useEffect(() => {
    props.dispatch(fetchMenu(id));
    props.dispatch(fetchDetail(id));
    // eslint-disable-next-line
  }, []);
  console.log(props);
  return (
    <div>
      {props.desc !== undefined &&
        props.desc.map((item) => {
          return (
            <div>
              <h3>{item.daily_menu.name}</h3>
              {/* <h3>{props.detail.establishment.featured_image}</h3> */}
            </div>
          );
        })}
      `
      {/* {props.detail !== undefined && 
            // props.detail.map((item)=> {
                // return (

                <h3>{props.detail.establishment.featured_image}</h3>

            }

        */}
    </div>
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

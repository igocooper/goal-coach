import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals } from '../actions/index';
import GoalItem from './GoalItem';

class GoalList extends Component {
    componentDidMount = () => {
      goalRef.on('value', snap => {
          let goals = [];
          snap.forEach( goal => {
              const { email, title } = goal.val();
              const serverKey = goal.key;
              goals.push({
                  email,
                  title,
                  serverKey
                });
          })
          this.props.setGoals(goals);
      })
    }
    
    render() {
        return (
            <div>
               {this.props.goals.map( (goal, index) => {
                   return (
                       <GoalItem key={index} goal={goal} />
                   )
               })
                   
               }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { goals } = state;

    return {
        goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
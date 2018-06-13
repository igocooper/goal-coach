import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { setCompleted } from '../actions';
import { connect } from 'react-redux'

class CompleteGoalList extends Component {
    componentDidMount = () => {
      completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({
                    email,
                    title
                });
            });
            this.props.setCompleted(completeGoals);
      });
    }

    clearAllCompletedGoals = () => {
        completeGoalRef.set([]);
    }
    
    render() {
        return (
            <div>
                {this.props.completedGoals.map( (completedGoal, index) => {
                    const { title, email } = completedGoal;
                    return (
                        <div style={{margin: '5px'}} key={index}>
                            <strong>{title}</strong> <span style={{marginRight: '5px'}}>completed by <em>{email}</em> </span>
                        </div>
                    )
                })}
                <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => this.clearAllCompletedGoals()}
                >
                    Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { completedGoals } = state;

    return {
        completedGoals
    }
}

export default connect(mapStateToProps,{ setCompleted })(CompleteGoalList);

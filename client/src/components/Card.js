import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "../App.css";
import { isAuthenticated } from './helper';

const MyCard = ({
    title = "Candidate",
    party= "Affiliation",
    description="My Description",
    img="",
    className,
    buttonName
    
}) => {

    const [vote, setVote] = useState(0)
    const {user} = isAuthenticated
    const [disable, setDisable] = useState(false)

    const clickVote = () => {
      setVote(vote + 1)
      setDisable(true)
    }


  return (
    <div>
      <Card className="president">
      <CardTitle style={{fontSize: "50px"}}>{title}</CardTitle>
        <CardBody>
          <CardImg className="image"style={{width: "250px", height: "250px", marginBottom: "45px", paddingBottom:"5px", marginRight: "5px"}}src={img} alt="Card image cap" />
          <CardSubtitle className={`${className} president`} >{party}</CardSubtitle>
          <CardText>{description}</CardText>
          {!isAuthenticated() ? 
          <Button variant="outline" href="/signin"className={`${buttonName}`} onsize="lg">Login to Vote</Button> 
          :
          <Button variant="outline" id="voteBtn" className={`${buttonName}`} disabled={disable} onClick={clickVote}  size="lg">Vote</Button> 
          }
        
          <CardText>Total Votes: {vote}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyCard;
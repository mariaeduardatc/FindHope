import * as React from 'react';
import {Container, Title, Question} from "./styles";

export function FAQ (){
  const [open, setOpen] = React.useState(false);

  const holdOpen = () => {
    setOpen(!open);
  };

  const handleQ1 = () => {
    // do something
    setOpen(false);
  };
  const handleQ2 = () => {
    // do something
    setOpen(!open);
  };

  return (
    <div>
      <Container>
        <Title><h1>FAQs</h1></Title>
      <Question>
        <button className ="box" onClick={handleQ1} id="Q1"> 
          <h4>What if I miss the live sessions?</h4>
        </button>
        {open? <div><h4> We record all the sessions & share it with lifetime access!</h4> </div> : <div></div>}
      </Question>

      <Question>
        <button className ="box" onClick={handleQ2}> 
          <h4>Why is this so affordable?</h4>
        </button>
        {open ? <div><h4>We keep our costs low & pass the benefits to you. No fancy office, No paid ads or investors to take the money.</h4></div> : <div></div>}
      </Question>
      <Question>
        <button className ="box" onClick={handleQ2}> 
          <h4>How will I join the sessions ?</h4>
        </button>
        {open ? <div><h4>We will add you into a whatsapp group where the links are shared, alternatively we share the links to your calendar as well</h4></div> : <div></div>}
      </Question>
      <Question>
        <button className ="box" onClick={handleQ2}> 
          <h4>What is the timezone ?</h4>
        </button>
        {open ? <div>We conduct sessions everyday at 8:30 pm est (currently EDT) </div> : <div></div>}
      </Question>
      <Question>
        <button className ="box" onClick={handleQ2}> 
          <h4>I am not in EST timezone, can I join?</h4>
        </button>
        {open ? <div>We offer a discounted price of $35 for participants who don’t reside in EST timezone, since they may not be able to attend most of the sessions. Write to us at ______ email to avail this offer ! </div> : <div></div>}
      </Question>
      </Container>
    </div>
  );
};
//export default FAQ;
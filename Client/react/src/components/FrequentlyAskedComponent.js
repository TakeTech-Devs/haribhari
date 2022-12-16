import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function FrequentlyAsked(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className='container mt-4 mb-2'>
        <h3>Frequently Asked Questions</h3>
        <div className="row">
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                <AccordionHeader targetId="1"><strong>General</strong></AccordionHeader>
                <AccordionBody accordionId="1">
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?<br /><br />
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?<br /><br />
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="2"><strong>Miscellaneous</strong></AccordionHeader>
                <AccordionBody accordionId="2">
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?<br /><br />
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?<br /><br />
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="3"><strong>Delivery</strong></AccordionHeader>
                <AccordionBody accordionId="3">
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?<br /><br />
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?<br /><br />
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="4"><strong>Cancellation and return</strong></AccordionHeader>
                <AccordionBody accordionId="4">
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?<br /><br />
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?<br /><br />
                    <h6>Lorem, ipsum dolor.</h6>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a ratione, deleniti cumque dolor reprehenderit?
                </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  );
}

export default FrequentlyAsked;
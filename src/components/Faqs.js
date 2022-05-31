import React from 'react'
import { Accordion } from "react-bootstrap";
import Accordionitem from "./Accordionitem";

function Faqs() {
    const data = [
        {
            key: "0",
            heading: "What is Hype Birdz?",
            text: "Hype Birdz is a collection of unique NFTs flying high on the Ethereum Blockchain.",
        },
        {
            key: "1",
            heading: "What is the mint supply?",
            text: "There will be 5000 Hype Birdz that will be minted. We’ll be expanding by adding further",
        },
        {
            key: "2",
            heading: "What can I do with my Hype Birdz?",
            text: "Love 'em, show them off in your profile pics, stake them, breed them*. Whatever you damn well please.",
        },
        {
            key: "3",
            heading: "What does NFT stand for?",
            text: "NFT means Non-Fungible Token. It’s a unique digital asset. They are bought and sold online, most frequently with cryptocurrency, and secured by blockchain technology.",
        },
        {
            key: "4",
            heading: "What is the Metaverse?",
            text: "The Metaverse refers to a new world, a better world. A shared virtual experience where everything can be bought and sold using cryptocurrency. ",
        },
        {
            key: "5",
            heading: "How can I join the Hype Birdz community?",
            text: "Follow us on socials and make sure to join our Discord server so you don’t miss an update.",
        },
    ];

   
  return (
    <div id="faq" className="container pt-3">
                <h1 className="sectionHeading mainHeading">FAQs</h1>
                <div className="customAccordion pt-3">
                    <Accordion>
                        {data.map((item) => (
                            <Accordionitem data={item} />
                        ))}
                    </Accordion>
                </div>
        </div>
  )
}

export default Faqs
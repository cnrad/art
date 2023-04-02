import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const NavBar = () => {
    const router = useRouter();

    const wrapperRef = useRef<HTMLDivElement>(null);

    const [currentPage, setCurrentPage] = useState("home");

    const [flashlightX, setFlashlightX] = useState(4);
    const [flashlightWidth, setFlashlightWidth] = useState(70);

    const updateSelection = (e: MouseEvent<HTMLButtonElement>, page: string) => {
        setCurrentPage(page);
        router.push(`/${page === "home" ? "" : page}`);

        const parentBounds = wrapperRef.current?.getBoundingClientRect();
        setFlashlightX(e.currentTarget.getBoundingClientRect().x - (parentBounds?.x ?? 0));
        setFlashlightWidth(e.currentTarget.getBoundingClientRect().width);
    };

    const pages = ["home", "works", "clients", "contact"];

    return (
        <Container
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            position={flashlightX}
        >
            <TopLine />
            <NavContainer ref={wrapperRef}>
                <Selection
                    animate={{ left: flashlightX, width: flashlightWidth }}
                    transition={{ ease: [0.36, 0.01, 0.28, 1], duration: 0.5 }}
                />
                <Glow
                    animate={{ left: flashlightX, width: flashlightWidth }}
                    transition={{ ease: [0.36, 0.01, 0.28, 1], duration: 0.5 }}
                />
                {pages.map(item => (
                    <NavButton
                        key={item}
                        onClick={(e: MouseEvent<HTMLButtonElement>) => updateSelection(e, item)}
                        active={currentPage === item}
                    >
                        {item}
                    </NavButton>
                ))}
            </NavContainer>
        </Container>
    );
};

const Container = styled(motion.div)<{ position: number }>`
    position: fixed;
    top: 1rem;
    width: fit-content;
    height: fit-content;
    border-radius: 10rem;
    border: 1px solid hsl(0 0% 20.5%);
    box-shadow: 0 4px 20px -10px #000;
    z-index: 99999;

    &::after {
        content: "";
        background: linear-gradient(
            to left,
            hsl(0 0% 20.5%) 0%,
            hsl(0 0% 20.5%) 40%,
            hsl(0 0% 40%) 45%,
            hsl(0 0% 70%) 55%,
            hsl(0 0% 20.5%) 70%,
            hsl(0 0% 20.5%) 100%
        );
        z-index: 1;
        pointer-events: none;
        background-position-x: calc(70% + ${({ position }) => position}px);
        background-size: 200%;
        position: absolute;
        bottom: -1px;
        left: 0px;
        width: 100%;
        height: 100%;
        will-change: background-position-x;
        border-radius: inherit;
        transition: background-position-x 0.6s ease 0s;
    }
`;

const TopLine = styled.div`
    position: absolute;
    top: -1px;
    height: 1px;
    width: 95%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0), hsl(0 0% 20.5%) 20%, hsl(0 0% 50%) 67.19%, rgba(0, 0, 0, 0));
    opacity: 0.6;
    z-index: 10;
`;

const NavContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.5rem;
    padding: 0.25rem;
    border-radius: 10rem;
    box-sizing: border-box;
    background: hsl(0 0% 5%);
    overflow: hidden;
    z-index: 2;
`;

const Selection = styled(motion.div)`
    position: absolute;
    height: 2rem;
    box-sizing: border-box;
    background: hsl(0 0% 15%);
    border-radius: 2rem;
    z-index: 1;
`;

const Glow = styled(motion.div)`
    position: absolute;
    bottom: -3rem;
    width: 50%;
    height: 4rem;
    box-sizing: border-box;
    background: white;
    border-radius: 2rem;
    opacity: 0.2;
    filter: blur(1rem);
    z-index: 1;
`;

const NavButton = styled(motion.button)<{ active: boolean }>`
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    border-radius: 10rem;
    position: relative;
    text-align: center;
    color: ${({ active }) => (active ? "hsl(0 0% 100%)" : "hsl(0 0% 60%)")};
    text-shadow: ${({ active }) => (active ? "rgb(255 255 255 / 57%) 1px 1px 12px" : "none")};
    padding: 0 1rem;
    outline: 0px;
    cursor: pointer;
    transition: color 150ms ease 0s, text-shadow 250ms ease 0s;
    width: max-content;
    z-index: 3;

    &:hover {
        color: hsl(0 0% 80%);
    }
`;

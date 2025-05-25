import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import realNewsAtom from '../../../Atoms/realNews_Atom';
import { useEffect, useState } from 'react';
// ======================================================= //
function Btn_Next() {
  let { id } = useParams();
  let navigate = useNavigate();
  let realNews = useRecoilState(realNewsAtom)[0];
  let [isOpacity, setIsOpacity] = useState(1);

  function hanlde_Next() {
    let nextId = +id + 1;


    realNews.forEach(ele => {
      if (ele.id == nextId) {
        window.scrollTo({ top: 0 });
        navigate(`/show_article/${nextId}`);
      }
    });
    
    if (nextId >= realNews.length) {
      setIsOpacity(.5)
    }
  }

  return <StyledWrapper>
    <button style={{ opacity: isOpacity }} onClick={hanlde_Next}>
      <span className="button_top"> Next Article </span>
    </button>
  </StyledWrapper>
}

const StyledWrapper = styled.div`
  button {
    --button_radius: 0.75em;
    --button_color: #e8e8e8;
    --button_outline_color: #000000;
    --hover_offset: 4px;
    --active_offset: 2px;
    --shadow_color: rgba(0, 0, 0, 0.5);
    --glitch_offset: 2px;

    font-size: 15px;
    font-weight: 700;
    border: none;
    width: 200px;
    border-radius: var(--button_radius);
    background: var(--button_outline_color);
    position: relative;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
  }

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 5px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    color: var(--button_outline_color);
    transform: translateY(-0.2em);
    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  button:hover {
    box-shadow: var(--hover_offset) var(--hover_offset) 0 var(--shadow_color);
    transform: translate(
      calc(-1 * var(--hover_offset)),
      calc(-1 * var(--hover_offset))
    );
  }

  button:hover .button_top {
    transform: translateY(-0.33em);
  }

  button:active .button_top {
    transform: translateY(0);
  }

  button:active {
    box-shadow: var(--active_offset) var(--active_offset) 0 var(--shadow_color);
    transform: translate(
      calc(-1 * var(--active_offset)),
      calc(-1 * var(--active_offset))
    );
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--button_outline_color),
      inset 0 0 0 2px var(--button_color);
  }

  /* Brutalist hover effect */
  button::before,
  button::after {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--button_color);
    color: var(--button_outline_color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    border-radius: var(--button_radius);
    opacity: 0;
  }

  /* Brutalist active effect */
  button:active::before,
  button:active::after {
    transform: none;
  }

  /* Additional brutalist flair */
  @keyframes brutalistShake {
    0%,
    100% {
      transform: translateX(0) translateY(0);
    }
    25% {
      transform: translateX(-2px) translateY(-2px) rotate(-1deg);
    }
    75% {
      transform: translateX(2px) translateY(2px) rotate(1deg);
    }
  }

  button:hover {
    animation: brutalistShake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}`;

export default Btn_Next;
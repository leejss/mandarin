import React from 'react';
import { Icon } from '../../common';
import './SplitButton.scss';

export const SplitButton = () => {
  return (
    <div className="SplitButton">
      <button>View</button>
      <span>
        <Icon name="arrowDown" />
        <ul className="popup">
          <li>
            <button>
              {/* SVG */}
              option1
            </button>
          </li>
          <li>
            <button>
              {/* SVG */}
              option1
            </button>
          </li>
          <li>
            <button>
              {/* SVG */}
              option1
            </button>
          </li>
        </ul>
      </span>
    </div>
  );
};

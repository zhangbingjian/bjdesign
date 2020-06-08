/** @format */

import React, { createContext, useState, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContext);
  const defaultOpenMenu = context.defaultOpenSubMenu as Array<string>;
  const isOpend = index && context.mode === 'vertical' ? defaultOpenMenu.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpend);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  });

  const subMenuClasses = classNames('bj-submenu', {
    'menu-open': menuOpen,
  });
  const openClass = classNames('icon-pullDown', {
    'is-open': menuOpen,
  });
  const handelClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  let timer: any;
  const handelMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 200);
  };

  const clickEvents =
    context.mode === 'vertical'
      ? {
        onClick: handelClick,
      }
      : {};

  const hoverEvents =
    context.mode !== 'vertical'
      ? {
        onMouseEnter: (e: React.MouseEvent) => {
          handelMouse(e, true);
        },
        onMouseLeave: (e: React.MouseEvent) => {
          handelMouse(e, false);
        },
      }
      : {};

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error('警告: SubMenu组件里有一个子元素，它并不是MenuItem组件');
      }
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className='submenu-title' {...clickEvents}>
        {title} <div className={openClass}></div>
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;

import React, { useEffect, useState } from 'react';

import { Container, Segment } from 'semantic-ui-react';
import { getFooterHTML, getSystemName } from '../helpers';

const Footer = () => {
  const systemName = getSystemName();
  const [footer, setFooter] = useState(getFooterHTML());
  let remainCheckTimes = 5;

  const loadFooter = () => {
    let footer_html = localStorage.getItem('footer_html');
    if (footer_html) {
      setFooter(footer_html);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainCheckTimes <= 0) {
        clearInterval(timer);
        return;
      }
      remainCheckTimes--;
      loadFooter();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Segment vertical>
      <Container textAlign='center'>
        {footer ? (
          <div
            className='custom-footer'
            dangerouslySetInnerHTML={{ __html: footer }}
          ></div>
        ) : (
          <div className='custom-footer'>
            <a
              href='https://api.pckjgpt.icu'
              target='_blank'
            >
             {/* 删除或注释掉这一行：{systemName} {process.env.REACT_APP_VERSION}{' '} */}
            </a>
            {' '}
            <a href='https://api.pckjgpt.icu' target='_blank'>
              
            </a>{' '}
            品创科技科技工作室{' '}
            <a href='https://api.pckjgpt.icu'>
             
            </a>
          </div>
        )}
      </Container>
    </Segment>
  );
};

export default Footer;

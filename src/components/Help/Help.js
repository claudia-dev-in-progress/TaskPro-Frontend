import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import help from '../../images/help.png';
import ModalHelp from 'components/ModalHelp/ModalHelp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import icon from '../../images/sprite.svg';
import { useTheme } from '@mui/material';

import { useAuth } from '../../hooks/useAuth';
export default function Help() {
  const [visibleModal, setVisibleModal] = useState(false);
  const theme = useTheme();
  const handleOnClose = () => setVisibleModal(false);
  const user = useAuth();
  const needHelpSvg =
    user.theme === 'violet' || user.theme === 'dark'
      ? '#icon-help-circle'
      : '#icon-help-circle';

  return (
    <div className="text-2xl">
      <div className=" h-[238px] w-[197px] sm:h-[272px] sm:w-[212px] rounded-[8px] ">
        <div className="flex flex-col p-[14px]">
          <img
            alt="info"
            className="mb-[14px]"
            height={'78px'}
            width={'54px'}
            src={help}
          ></img>
          <Box
            sx={{
              marginBottom: '18px',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.42',
                letterSpacing: 0.7,
                color: 'primary.info',
              }}
            >
              If you need help with
              <Link
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.33',
                  letterSpacing: 0.7,
                  color: 'secondary.light',
                  textDecoration: 'none',
                }}
              >
                {' '}
                TaskPro
              </Link>
              , check out our support resources or reach out to our customer
              support team.
            </Typography>
          </Box>

          <button
            onClick={() => setVisibleModal(true)}
            className="flex  items-center text-white"
          >
            <HelpOutlineIcon
              sx={{
                marginTop: '-2px',
                marginRight: '6px',
                width: '16px',
                backgroundColor: theme.palette.background.error,
                color: theme.palette.secondary.light,
              }}
            />

            <Box>
              <use href={icon + `${needHelpSvg}`}></use>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.42',
                  letterSpacing: 0.7,
                  color: 'primary.info',
                }}
              >
                <Link
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.33',
                    letterSpacing: 0.7,
                    color: 'secondary.light',
                    textDecoration: 'none',
                  }}
                >
                  {' '}
                  Need help?
                </Link>
              </Typography>
            </Box>
          </button>
        </div>
      </div>
      <ModalHelp onClose={handleOnClose} visible={visibleModal}></ModalHelp>
    </div>
  );
}

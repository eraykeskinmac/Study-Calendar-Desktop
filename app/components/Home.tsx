/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, Text, Grid, Flex, Drawer } from 'bumbag';
import DayPage from './DayPage';

export default function HomePage(): JSX.Element {
  const drawer = Drawer.useState();

  const [selectedBox, setSelectedBox] = useState<any>();

  const data = [
    [
      {
        Day: 'Pazartesi',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9:10-9.40',
        ZoomId: '123456',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9:10-9.40',
        ZoomId: '3024923310',
      },
      {
        StudyName: '-',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: '-',
      },
    ],
    [
      {
        Day: 'Salı',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: '-',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: '-',
      },
    ],
    [
      {
        Day: 'Çarşamba',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: '-',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: '-',
      },
    ],
    [
      {
        Day: 'Perşembe',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: '-',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: '-',
      },
    ],
    [
      {
        Day: 'Cuma',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
        Time: '9.30-9.40',
        ZoomId: '1234567',
      },
    ],
  ];

  const getTimeBox = (time: string) => {
    if (time === '-') {
      return <Box />;
    }
    return (
      <Flex
        fontWeight="bold"
        border="1px solid #ccc"
        borderRadius="4px"
        padding="xs"
        justifyContent="center"
        alignItems="center"
      >
        <Text>{time}</Text>
      </Flex>
    );
  };

  return (
    <Box padding="lg">
      <Grid
        gridTemplateColumns="30px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        gridTemplateRows="40px 1fr 1fr 1fr  1fr  1fr "
        gap="8px"
      >
        {getTimeBox('-')}
        {getTimeBox('9:10 - 9.40')}
        {getTimeBox('9:50 - 10.20')}
        {getTimeBox('10:30 - 11.00')}
        {getTimeBox('11:10 - 11.40')}
        {getTimeBox('11:50 - 12.20')}
        {getTimeBox('13:10 - 13.40')}
        {getTimeBox('13:50 - 14.20')}
        {getTimeBox('14:30 - 15.00')}
        {getTimeBox('15:10 - 15.40')}

        {data.map((item, i) =>
          item.map((a, index) => {
            if (a.Day) {
              return (
                <Flex
                  transform="rotate(180deg)"
                  writingMode="vertical-lr"
                  justifyContent="center"
                  backgroundColor="primary"
                  color="white"
                >
                  {a.Day}
                </Flex>
              );
            }

            return (
              <Flex
                border="1px solid #ccc"
                borderRadius="4px"
                padding="xs"
                flexDirection="column"
                // eslint-disable-next-line react/no-array-index-key
                key={`Study-${i}${index}`}
                cursor="pointer"
                _hover={{
                  border: '1px solid blue',
                }}
                onClick={() => {
                  drawer.show();
                  setSelectedBox(a);
                }}
              >
                <Text>{a.StudyName}</Text>
                <Text>{a.Class}</Text>
                <Text>{a.Place}</Text>
              </Flex>
            );
          })
        )}
      </Grid>
      <Drawer width="50%" placement="right" {...drawer}>
        <DayPage data={selectedBox} />
      </Drawer>
    </Box>
  );
}

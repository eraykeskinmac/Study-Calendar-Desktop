/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, Text, Grid, Flex, Drawer } from 'bumbag';

export default function HomePage(): JSX.Element {
  const drawer = Drawer.useState();

  const [selectedBox, setSelectedBox] = useState<any>();

  const data = [
    [
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
      {
        StudyName: 'Tarih1',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih2',
        Class: 'C1',
        Place: 'Zoom',
      },
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
    ],
    [
      {
        StudyName: 'Tarih',
        Class: 'C1',
        Place: 'Zoom',
      },
    ],
  ];

  const getTimeBox = (time: string) => {
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
        gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        gridTemplateRows="40px 1fr 1fr 1fr  1fr  1fr "
        gap="8px"
      >
        {getTimeBox('9:10 - 9.40')}
        {getTimeBox('9:11 - 9.40')}
        {getTimeBox('9:13 - 9.40')}
        {getTimeBox('9:14 - 9.40')}
        {getTimeBox('9:15 - 9.40')}
        {getTimeBox('9:16 - 9.40')}
        {getTimeBox('9:17 - 9.40')}
        {getTimeBox('9:18 - 9.40')}
        {getTimeBox('9:10 - 9.40')}
        {getTimeBox('9:10 - 9.40')}

        {data[0].map((a, index) => {
          return (
            <Flex
              border="1px solid #ccc"
              borderRadius="4px"
              padding="xs"
              flexDirection="column"
              // eslint-disable-next-line react/no-array-index-key
              key={a.StudyName + index}
              cursor="pointer"
              _hover={{
                border: '1px solid blue',
              }}
              onClick={() => {
                drawer.show();
                setSelectedBox(a.StudyName);
              }}
            >
              <Text>{a.StudyName}</Text>
              <Text>{a.Class}</Text>
              <Text>{a.Place}</Text>
            </Flex>
          );
        })}
      </Grid>
      <Drawer width="50%" placement="right" {...drawer}>
        Selected Study :{selectedBox}
      </Drawer>
    </Box>
  );
}

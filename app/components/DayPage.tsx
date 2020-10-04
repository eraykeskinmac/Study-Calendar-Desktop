/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Box,
  Textarea,
  Text,
  FieldWrapper,
  Flex,
  Icon,
  Group,
  Input,
  Button,
} from 'bumbag';
import { FaCheckCircle } from 'react-icons/fa';

export default function DayPage(props: { data: any }): JSX.Element {
  return (
    <Box padding="lg">
      <Text>{props.data && props.data.StudyName}</Text>
      <Text> {props.data && props.data.Class}</Text>
      <FieldWrapper label="Notlar">
        <Textarea rows="10" placeholder="Enter your name here..." />
      </FieldWrapper>

      <Text fontWeight="bold" textAlign="center" display="block" marginY="sm">
        Yapılacaklar
      </Text>

      <Group marginY="sm">
        <Input width="100%" placeholder="Yapılacak" />
        <Button>Ekle</Button>
      </Group>

      <Flex>
        <Flex
          justifyContent="space-between"
          width="100%"
          padding="sm"
          alignItems="center"
          backgroundColor="primaryTint"
        >
          <Flex alignItems="center">
            <FaCheckCircle />
            <Text marginLeft="sm"> 123 123 </Text>
          </Flex>
          <Icon icon="close" />
        </Flex>
      </Flex>
    </Box>
  );
}

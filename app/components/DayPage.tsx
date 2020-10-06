/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
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
  const [tasks, setTasks] = useState<any[]>([]);

  const [value, setValue] = useState('');

  return (
    <Box padding="lg">
      <Text>Ders:{props.data && props.data.StudyName}</Text>
      <Text paddingLeft="12px">Sınıf:{props.data && props.data.Class}</Text>
      <Text paddingLeft="12px">Yer:{props.data && props.data.Place}</Text>
      <Text paddingLeft="12px">Zaman:{props.data && props.data.Time}</Text>
      <Text paddingLeft="12px">ZoomId:{props.data && props.data.ZoomId}</Text>
      <FieldWrapper label="Notlar" paddingTop="12px">
        <Textarea rows="10" placeholder="Notlar..." />
      </FieldWrapper>

      <Text fontWeight="bold" textAlign="center" display="block" marginY="sm">
        Yapılacaklar
      </Text>

      <Group marginY="sm">
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          width="100%"
          placeholder="Yapılacak"
        />
        <Button
          onClick={() => {
            const newTasks: any[] = [...tasks];
            newTasks.unshift({
              todo: value,
              isChecked: false,
            });

            setTasks(newTasks);
            setValue('');
          }}
        >
          Ekle
        </Button>
      </Group>

      <Box>
        {tasks.map((item, index) => {
          return (
            <Flex
              key={`item-${index}`}
              justifyContent="space-between"
              width="100%"
              padding="sm"
              alignItems="center"
              backgroundColor="primaryTint"
              marginBottom="xs"
            >
              <Flex
                alignItems="center"
                cursor="pointer"
                onClick={() => {
                  const newTasks = [...tasks];
                  newTasks.splice(index, 1, {
                    todo: item.todo,
                    isChecked: !item.isChecked,
                  });

                  setTasks(newTasks);
                }}
              >
                <FaCheckCircle color={item.isChecked ? 'green' : 'black'} />
                <Text
                  marginLeft="sm"
                  textDecoration={item.isChecked ? 'line-through' : 'inital'}
                >
                  {item.todo}
                </Text>
              </Flex>
              <Icon
                icon="close"
                onClick={() => {
                  const deleteTask = [...tasks];
                  deleteTask.splice(index, 1);
                  setTasks(deleteTask);
                }}
              />
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
}

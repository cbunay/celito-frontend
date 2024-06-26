import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import {
  Add12Regular,
  AlignSpaceEvenlyHorizontalRegular,
  CheckmarkFilled,
  DataUsageEditRegular,
  DeleteRegular,
  Flowchart20Regular,
  MoreHorizontal16Filled,
} from '@fluentui/react-icons';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useState } from 'react';

import { Input, Layout } from '../../hooks/useLayoutForm';
import { Size } from '../../constans/size';
import { useStyles } from './Row.styles';
import InputRow from '../Input/Input';

interface Row {
  sectionIndex: number;
  rowIndex: number;
}

export function Row({ sectionIndex, rowIndex }: Row) {
  const classes = useStyles();
  const { control } = useFormContext<Layout>();

  const {
    fields: inputs,
    remove,
    update,
  } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.rows.${rowIndex}.inputs`,
  });

  const totalSpace = inputs.reduce((total, input) => total + input.size, 0);
  const isSpaceAvailable = totalSpace <= 80;

  const handleSizeChange = (index: number, size: number, input: Input) => {
    const usedSpace = totalSpace - input.size;
    const isAbleToFit = usedSpace + size <= Size.xlarge;

    if (isAbleToFit)
      update(index, {
        ...input,
        size,
      });
  };

  console.log(inputs);
  return (
    <div className={classes.row}>
      {inputs.map((input, index) => (
        <InputRow key={input.id} width={input.size}>
          <Menu hasIcons>
            <MenuTrigger disableButtonEnhancement>
              <MoreHorizontal16Filled />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem
                  icon={<Flowchart20Regular className={classes.icon} />}
                  disabled
                >
                  Set Layout Rules
                </MenuItem>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <MenuItem
                      icon={
                        <AlignSpaceEvenlyHorizontalRegular
                          className={classes.icon}
                        />
                      }
                    >
                      Field Width
                    </MenuItem>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      <MenuItem
                        onClick={() =>
                          handleSizeChange(index, Size.small, input)
                        }
                      >
                        <div className={classes.subMenuItem}>
                          <span>Small</span>
                          {input.size === Size.small && (
                            <CheckmarkFilled className={classes.checkmarIcon} />
                          )}
                        </div>
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          handleSizeChange(index, Size.medium, input)
                        }
                      >
                        <div className={classes.subMenuItem}>
                          Medium
                          {input.size === Size.medium && (
                            <CheckmarkFilled className={classes.checkmarIcon} />
                          )}
                        </div>
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          handleSizeChange(index, Size.large, input)
                        }
                      >
                        <div className={classes.subMenuItem}>
                          Large
                          {input.size === Size.large && (
                            <CheckmarkFilled className={classes.checkmarIcon} />
                          )}
                        </div>
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          handleSizeChange(index, Size.xlarge, input)
                        }
                      >
                        <div className={classes.subMenuItem}>
                          Extra Large
                          {input.size === Size.xlarge && (
                            <CheckmarkFilled className={classes.checkmarIcon} />
                          )}
                        </div>
                      </MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
                <MenuItem
                  icon={<DataUsageEditRegular className={classes.icon} />}
                >
                  Edit Field
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    remove(index);
                  }}
                  icon={<DeleteRegular className={classes.deleteIcon} />}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </InputRow>
      ))}
      {isSpaceAvailable && (
        <Button className={classes.columnButton} icon={<Add12Regular />}>
          Add Column
        </Button>
      )}
    </div>
  );
}

export default Row;

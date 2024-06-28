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

import { Size } from '../../constans/size';
import { Input, Layout } from '../../hooks/useLayoutForm';
import InputRow from '../Input/Input';
import { useStyles } from './Row.styles';

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
    append,
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

  return (
    <div className={classes.row}>
      {inputs.map((input, index) => {
        const usedSpace = totalSpace - input.size;

        return (
          <InputRow
            key={input.id}
            width={input.size}
            name={`sections.${sectionIndex}.rows.${rowIndex}.inputs.${index}.label`}
            indexes={[sectionIndex, rowIndex, index]}
          >
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
                          disabled={usedSpace + Size.small >= Size.xlarge}
                          onClick={() =>
                            handleSizeChange(index, Size.small, input)
                          }
                        >
                          <div className={classes.subMenuItem}>
                            <span>Small</span>
                            {input.size === Size.small && (
                              <CheckmarkFilled
                                className={classes.checkmarIcon}
                              />
                            )}
                          </div>
                        </MenuItem>
                        <MenuItem
                          disabled={usedSpace + Size.medium >= Size.xlarge}
                          onClick={() =>
                            handleSizeChange(index, Size.medium, input)
                          }
                        >
                          <div className={classes.subMenuItem}>
                            Medium
                            {input.size === Size.medium && (
                              <CheckmarkFilled
                                className={classes.checkmarIcon}
                              />
                            )}
                          </div>
                        </MenuItem>
                        <MenuItem
                          disabled={usedSpace + Size.large >= Size.xlarge}
                          onClick={() =>
                            handleSizeChange(index, Size.large, input)
                          }
                        >
                          <div className={classes.subMenuItem}>
                            Large
                            {input.size === Size.large && (
                              <CheckmarkFilled
                                className={classes.checkmarIcon}
                              />
                            )}
                          </div>
                        </MenuItem>
                        <MenuItem
                          disabled={usedSpace + Size.xlarge > Size.xlarge}
                          onClick={() =>
                            handleSizeChange(index, Size.xlarge, input)
                          }
                        >
                          <div className={classes.subMenuItem}>
                            Extra Large
                            {input.size === Size.xlarge && (
                              <CheckmarkFilled
                                className={classes.checkmarIcon}
                              />
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
        );
      })}
      {isSpaceAvailable && (
        <Button
          className={classes.columnButton}
          icon={<Add12Regular />}
          onClick={(first) => {
            append({ label: '', size: Size.small });
          }}
        >
          Add Column
        </Button>
      )}
    </div>
  );
}

export default Row;

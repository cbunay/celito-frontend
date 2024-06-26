import {
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import {
  AlignSpaceEvenlyHorizontalRegular,
  CheckmarkFilled,
  DataUsageEditRegular,
  DeleteRegular,
  Flowchart20Regular,
  MoreHorizontal16Filled,
} from '@fluentui/react-icons';
import { useStyles } from './InputMenu.styles';

const FieldWidthSubMenu = () => {
  const classes = useStyles();

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuItem
          icon={<AlignSpaceEvenlyHorizontalRegular className={classes.icon} />}
        >
          Field Width
        </MenuItem>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>
            <div className={classes.subMenuItem}>
              <span>Small</span>
              <CheckmarkFilled className={classes.checkmarIcon} />
            </div>
          </MenuItem>
          <MenuItem>Medium</MenuItem>
          <MenuItem>Large</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

interface InputMenuProps {
  onRemove: () => void;
}

export function InputMenu({ onRemove }: InputMenuProps) {
  const classes = useStyles();
  return (
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
          <FieldWidthSubMenu />
          <MenuItem icon={<DataUsageEditRegular className={classes.icon} />}>
            Edit Field{' '}
          </MenuItem>
          <MenuItem
            onClick={onRemove}
            icon={<DeleteRegular className={classes.deleteIcon} />}
          >
            Delete
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

export default InputMenu;

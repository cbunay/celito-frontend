import { useState } from 'react';

import {
  Button,
  DialogTrigger,
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
} from '@fluentui/react-components';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '../../components/Dialog/Dialog';
import { useStyles } from './PageLayoutBuilder.styles';
import Design from '../Design/Design';

export function PageLayoutBuilder() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState<TabValue>('design');

  const onTabSelect = (e: SelectTabEvent, data: SelectTabData) => {
    setSelectedTab(data.value);
  };

  return (
    <Dialog trigger={<Button>Open Builder</Button>}>
      <DialogTitle>Page Layout Builder</DialogTitle>
      <DialogContent>
        <TabList selectedValue={selectedTab} onTabSelect={onTabSelect}>
          <Tab value="design">Design</Tab>
          <Tab value="related-objects">Related Objects</Tab>
        </TabList>
        <div className={classes.tabPanels}>
          {selectedTab === 'design' && <Design />}
        </div>
      </DialogContent>
      <DialogActions>
        <DialogTrigger>
          <Button appearance="subtle" className={classes.cancelButton}>
            Cancel Request
          </Button>
        </DialogTrigger>
        <Button form="form-layout" type="submit" appearance="primary">
          Save Design
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PageLayoutBuilder;

import { createMockArray } from '@/utils/CommonUtils';
import List from '@/components/common/List';
import ListItem from '@/components/common/ListItem';
import OptionButtonSkeleton from './OptionButtonSkeleton';

export default function OptionGroupSkeleton() {
  return (
    <List>
      {createMockArray(4).map((i) => {
        return (
          <ListItem key={i}>
            <OptionButtonSkeleton />
          </ListItem>
        );
      })}
    </List>
  );
}

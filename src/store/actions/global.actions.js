import { PASS_MENU_PROPS } from '../../constants';

const passMenuProps = payload => ({
  type: PASS_MENU_PROPS,
  payload,
});

export default passMenuProps;

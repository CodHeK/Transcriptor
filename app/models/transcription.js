import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  fileAddress: attr('string'),
  createdAt: attr('moment', { readOnly: true }),
  audioDuration: attr('string'),
  creator: belongsTo('user')
});

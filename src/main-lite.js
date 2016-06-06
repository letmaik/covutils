import * as array from './array.js'
import * as constants from './constants.js'
import * as i18n from './i18n.js'
import * as unit from './unit.js'
import * as range from './range.js'
import * as parameter from './parameter.js'
import * as validate from './validate.js'

import * as referencing from './domain/referencing.js'
import * as domainSubset from './domain/subset.js'
import * as covCreate from './coverage/create.js'
import * as covReferencing from './coverage/referencing.js'
import * as covSubset from './coverage/subset.js'
import * as covTransform from './coverage/transform.js'

import * as collCreate from './collection/create.js'

export default {
  array,
  constants,
  i18n,
  validate,
  range,
  parameter,
  unit,
  domain: {
    referencing,
    subset: domainSubset
  },
  coverage: {
    create: covCreate,
    referencing: covReferencing,
    subset: covSubset,
    transform: covTransform
  },
  collection: {
    create: collCreate
  }
}

const express = require('express');
const db = require('../db/db');
const {
  addSource,
  removeSource,
  addDest,
  removeDest,
  saveRules,
} = require('../utils/connectors');

const router = express.Router();

router.get('/', async (req, res) => {
  const conns = await db.exec('SELECT * FROM connectors');

  res.json(conns);
});

router.get('/:id', async (req, res, next) => {
  const conn = await db.exec('SELECT * FROM connectors WHERE id = $1', [
    req.params.id,
  ]);

  res.json(conn);
});

router.delete('/:id', async (req, res, next) => {
  await db.exec('DELETE FROM connectors WHERE id = $1', [req.params.id]);

  res.json({
    succes: true,
  });
});

router.post('/', async (req, res, next) => {
  await db.exec(
    'INSERT INTO connectors (name, sources, destinations, rules) VALUES ($1, $2, $3, $4)',
    [req.body.name, [], [], ['3<_>5<_>n']]
  );

  res.json({
    success: true,
  });
});

router.put('/', async (req, res) => {
  if (req.body.action === 'addsource') {
    const result = await addSource(req.body.sourceId, req.body.conId);

    if (result === 'success') {
      res.json({
        success: true,
      });
    } else if (result === 'hassource') {
      res.status(400).json({
        success: false,
        msg: 'hassource',
      });
    } else if (result === 'isindests') {
      res.status(400).json({
        success: false,
        msg: 'isindests',
      });
    }
  } else if (req.body.action === 'removesource') {
    await removeSource(req.body.sourceId, req.body.conId);

    res.json({
      success: true,
    });
  } else if (req.body.action === 'adddest') {
    const result = await addDest(req.body.destId, req.body.conId);

    if (result === 'success') {
      res.json({
        success: true,
      });
    } else if (result === 'hasdest') {
      res.status(400).json({
        success: false,
        msg: 'hasdest',
      });
    } else if (result === 'isinsources') {
      res.status(400).json({
        success: false,
        msg: 'isinsources',
      });
    }
  } else if (req.body.action === 'removedest') {
    await removeDest(req.body.destId, req.body.conId);

    res.json({
      success: true,
    });
  } else if (req.body.action === 'saverules') {
    await saveRules(req.body.rules, req.body.conId);

    res.json({
      success: true,
    });
  } else {
    res.status(400).json({
      success: false,
      msg: 'no action specified',
    });
  }
});

module.exports = router;

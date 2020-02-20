const express = require('express');
const router = express.Router();


const MeetupsModel = require('../models/Meetups.js')



router.post(
    '/eventpost',
    (req, res)=> {
        const formdata = {
         'eventName' : req.body.eventName,
        'sportType' : req.body.sportType,
         'description' : req.body.description,
         'location' : req.body.location,
         'eventDate' : req.body.eventDate,
         'duration' : req.body.duration,
         'members' : req.body.members,
         'active' : req.body.active

        }

        
        const theEvent = new MeetupsModel(formdata);
        theEvent.save();
        res.send('Event Saved');
    }
)

router.post(
    '/eventcomment',
    (req,res) => {
        const formdata = {
            'eventName' : req.body.eventName,
            'comment' : req.body.comment
        }

        const eventComment = new MeetupsModel(formdata);
        eventComment.save();
        res.send('Comment has been posted')
    }
)


router.get(
    '/events',
    (req, res)=> {
        MeetupsModel.find()
        .then((results) => {
            res.json({results: results});
        })

    }
)

module.exports = router;
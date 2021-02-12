return Notification.findAndCountAll({
    include: [
        {
            model: Timesheet,
            as: 'timesheet_details',
            include: [
                {
                    model: User,
                    as: 'sender_details',
                    include: [
                        {
                            model: Designation,
                            as: 'designation',
                            attributes: ['name'],
                        },
                    ],
                    attributes: ['user_id', 'photo', 'first_name'],
                    where: {
                        company_id: userData.company_id,
                    },
                    required: false,
                },
            ],
            attributes: ['task_title'],
            where: {
                timesheet_id: userData.timesheet_id,
            },
        },
    ],
    attributes: ['notification_id', 'notification_type', 'sender_id', 'receiver_id', 'notify_text', 'added_on', 'viewed_at', 'timesheet_id'],
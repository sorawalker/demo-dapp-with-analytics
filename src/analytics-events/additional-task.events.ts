const initTaskId = window.localStorage.getItem('INIT_ADDITIONAL_TASK_ID');
const actionTaskId = window.localStorage.getItem('ACTION_ADDITIONAL_TASK_ID');

const generateAdditionalTaskEvent = (taskId: string | null) => {
    if (taskId === null) {
        return undefined;
    }

    return new CustomEvent(
        "ADDITIONAL_TASK_EVENT",
        {
            detail: {
                type: 'ADDITIONAL_TASK_EVENT',
                taskId: taskId,
            }
        });
}

const initAdditionalEvent = generateAdditionalTaskEvent(initTaskId);
const actionAdditionalEvent = generateAdditionalTaskEvent(actionTaskId);

export {
    initAdditionalEvent,
    actionAdditionalEvent,
}
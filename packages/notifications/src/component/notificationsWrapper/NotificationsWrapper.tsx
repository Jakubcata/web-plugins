import { useBem } from '@jacobii/hooks';
import { type NotificationType } from '../../types/types';
import { Notification } from './Notification';

type NotificationsProps = {
    notifications: NotificationType[];
};

export function NotificationsWrapper({ notifications }: NotificationsProps) {
    const { bem } = useBem('jx-notifications-wrapper');

    return (
        <div className={bem()}>
            {notifications.map(({ id, message, type, timeout }) => {
                return (
                    <Notification
                        key={id}
                        id={id}
                        timeout={timeout}
                        message={message}
                        className={bem({
                            notification: true,
                            [`notification--${type}`]: true,
                        })}
                    />
                );
            })}
        </div>
    );
}

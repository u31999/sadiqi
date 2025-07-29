import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function Chatbot() {
	createChat({
	webhookUrl: 'https://primary-production-f8f4.up.railway.app/webhook/e5cf7870-0e76-4071-b81f-f2c7f3dd7b2f/chat',
	defaultLanguage: 'ar',
	initialMessages: [
		'مرحبا بك 👋',
		'سعيدين بزيارتك لمنصتنا, اذا كان لديك اي استفسار انا هنا لمساعدتك'
	],
	i18n: {
		ar: {
			title: 'مرحبا بك! 👋',
			subtitle: "بداء المحادثة نحن هنا لمساعدتك 24/7.",
			footer: '',
			getStarted: 'محادثة جديدة',
			inputPlaceholder: 'قم بكتابة سؤالك...',
		}},
});
}
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../constants/portfolioData';

export default function Contact({ darkMode, lang }) {
  const { socials } = portfolioData[lang].personalInfo;
  const common = portfolioData[lang].common;
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus({ submitting: false, success: false, error: lang === 'en' ? 'Please fill in all form fields.' : 'Mohon isi semua bidang formulir.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    const SERVICE_ID = 'service_portfolio';
    const TEMPLATE_ID = 'template_portfolio';
    const PUBLIC_KEY = 'user_dummy_key';

    if (PUBLIC_KEY === 'user_dummy_key') {
      setTimeout(() => {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ user_name: '', user_email: '', message: '' });
      }, 1500);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus({ submitting: false, success: true, error: null });
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          setStatus({
            submitting: false,
            success: false,
            error: lang === 'en' ? `Failed to send message: ${error.text || 'Connection error'}` : `Gagal mengirim pesan: ${error.text || 'Koneksi bermasalah'}`,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 px-6 md:px-12 relative overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-slate-950/25' : 'bg-transparent'
      }`}
    >
      {/* Background Decor */}
      <div className="absolute top-[40%] right-[-10%] w-72 h-72 rounded-full bg-[#99B9C9]/5 blur-3xl pointer-events-none"></div>

          <div className="max-w-5xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {lang === 'en' ? 'Contact' : 'Hubungi'}{' '}
                <span className="bg-gradient-to-r from-[#577B95] to-[#99B9C9] bg-clip-text text-transparent">{lang === 'en' ? 'Me' : 'Saya'}</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#577B95] to-[#99B9C9] mx-auto mt-4 rounded-full"></div>
              <p className={`mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-655'}`}>
                {lang === 'en'
                  ? 'Send me an email or reach out through other social communication channels.'
                  : 'Kirimkan surat elektronik atau hubungi melalui akun media komunikasi sosial lainnya.'}
              </p>
            </div>
    
            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#577B95] rounded-full" />
              <span className={`text-xs font-mono font-bold uppercase tracking-[0.18em] ${darkMode ? 'text-[#99B9C9]' : 'text-[#577B95]'}`}>{common.contact.title}</span>
            </div>
            
            <p className={`leading-relaxed mb-8 text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-655'}`}>
              {common.contact.desc}
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className={`p-5 rounded-2xl border flex items-center gap-5 ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="p-3.5 rounded-2xl bg-[#577B95]/10 text-[#577B95] text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="block text-[10px] font-bold font-mono uppercase text-slate-400 tracking-wider">Email</span>
                  <a
                    href={`mailto:${socials.email}`}
                    className={`text-sm md:text-base font-bold hover:text-[#577B95] transition-colors duration-200 ${
                      darkMode ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {socials.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={`p-5 rounded-2xl border flex items-center gap-5 ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="p-3.5 rounded-2xl bg-[#99B9C9]/15 text-[#99B9C9] text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="block text-[10px] font-bold font-mono uppercase text-slate-400 tracking-wider">{lang === 'en' ? 'Location' : 'Lokasi'}</span>
                  <span className={`text-sm md:text-base font-bold ${
                    darkMode ? 'text-white' : 'text-slate-955'
                  }`}>
                    Pekanbaru, Indonesia
                  </span>
                </div>
              </div>

              {/* Whatsapp */}
              <div className={`p-5 rounded-2xl border flex items-center gap-5 ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-lg">
                  <FaWhatsapp />
                </div>
                <div>
                  <span className="block text-[10px] font-bold font-mono uppercase text-slate-400 tracking-wider">WhatsApp</span>
                  <a
                    href="https://wa.me/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm md:text-base font-bold hover:text-emerald-500 transition-colors duration-200 ${
                      darkMode ? 'text-white' : 'text-slate-955'
                    }`}
                  >
                    +62 819-0267-3775
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className={`p-6 md:p-7 rounded-2xl border space-y-4 relative ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-16 w-12 h-[2px] bg-gradient-to-r from-[#577B95] to-[#99B9C9] rounded-full"></div>

              <div>
                <label
                  htmlFor="user_name"
                  className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}
                >
                  {lang === 'en' ? 'Full Name' : 'Nama Lengkap'}
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder={lang === 'en' ? 'Your full name...' : 'Nama lengkap Anda...'}
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-[#577B95] transition-all duration-300 ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                      : 'bg-slate-100/50 border-slate-205 text-slate-900 placeholder-slate-400'
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}
                >
                  {lang === 'en' ? 'Email Address' : 'Alamat Email'}
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder={lang === 'en' ? 'Your active email...' : 'Email aktif Anda...'}
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-[#577B95] transition-all duration-300 ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                      : 'bg-slate-100/50 border-slate-205 text-slate-900 placeholder-slate-400'
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}
                >
                  {lang === 'en' ? 'Message' : 'Pesan'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={lang === 'en' ? 'Write your message here...' : 'Tuliskan pesan Anda di sini...'}
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-[#577B95] transition-all duration-300 resize-none ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600'
                      : 'bg-slate-100/50 border-slate-205 text-slate-900 placeholder-slate-400'
                  }`}
                  required
                />
              </div>

              {/* Status Alert Message */}
              {status.error && (
                <div className="p-4 rounded-2xl text-xs font-bold font-mono bg-rose-500/10 border border-rose-500/20 text-rose-500">
                  ⚠️ ERROR: {status.error}
                </div>
              )}
              {status.success && (
                <div className="p-4 rounded-2xl text-xs font-bold font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                  {lang === 'en' ? '🎉 SUCCESS: Your message has been sent!' : '🎉 BERHASIL: Pesan Anda telah dikirim!'}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="px-5 py-2.5 rounded-lg text-xs cursor-pointer bg-gradient-to-r from-[#577B95] to-[#99B9C9] hover:from-[#4d6d85] hover:to-[#8fb0c1] text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg shadow-[#577B95]/10 hover:shadow-[#577B95]/25 w-full sm:w-auto"
                >
                  {status.submitting ? (
                    <span>{lang === 'en' ? 'Sending...' : 'Mengirim...'}</span>
                  ) : (
                    <>
                      <span>{lang === 'en' ? 'Send Message' : 'Kirim Pesan'}</span>
                      <FaPaperPlane size={11} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

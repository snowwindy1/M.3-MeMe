document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');

    // Get the video URL from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('video');

    if (!videoUrl) {
        videoContainer.innerHTML = '<p>No video URL provided.</p>';
        return;
    }

    // Create an iframe for embedding the video
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '600px'; // ปรับความสูงเพื่อแสดงวิดีโอในแนวนอน
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    // Set iframe src based on URL
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        // YouTube video
        iframe.src = videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/');
    } else if (videoUrl.includes('facebook.com')) {
        // Facebook video
        iframe.src = videoUrl.replace('facebook.com', 'facebook.com/plugins/video.php?href=');
    } else if (videoUrl.includes('tiktok.com')) {
        // TikTok video
        iframe.src = videoUrl.replace('tiktok.com/@username/video/', 'tiktok.com/embed/v2/');
    } else {
        // Other video sources (assumed to be embeddable)
        iframe.src = videoUrl;
    }

    // Append the iframe to the video container
    videoContainer.appendChild(iframe);
});

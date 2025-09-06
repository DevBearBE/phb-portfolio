import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://praktijkhetbergsken.be/',
            lastModified: new Date(),
        },
        {
            url: 'https://praktijkhetbergsken.be/over',
            lastModified: new Date(),
        },
        {
            url: 'https://praktijkhetbergsken.be/aanbod/diagnostisch-onderzoek',
            lastModified: new Date(),
        },
        {
            url: 'https://praktijkhetbergsken.be/aanbod/begeleiding',
            lastModified: new Date(),
        },
        {
            url: 'https://praktijkhetbergsken.be/team',
            lastModified: new Date(),
        },
        {
            url: 'https://praktijkhetbergsken.be/tarieven/diagnostisch-onderzoek',
            lastModified: new Date(),
        },
        {
            url: 'https://praktijkhetbergsken.be/tarieven/begeleiding',
            lastModified: new Date(),
        },
        {
            url: 'https://praktijkhetbergsken.be/contact',
            lastModified: new Date(),
        },
    ];
}